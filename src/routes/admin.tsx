import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { dataService } from "@/lib/data-service";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Trash2, Edit, Save, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getTextByLang, type Post, type Course, type Lecture } from "@/lib/content";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
  beforeLoad: ({ navigate }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  },
});

function AdminDashboard() {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState(() => dataService.getPosts());
  const [courses, setCourses] = useState(() => dataService.getCourses());
  const [lectures, setLectures] = useState(() => dataService.getLectures());
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null);

  const refreshData = () => {
    setPosts(dataService.getPosts());
    setCourses(dataService.getCourses());
    setLectures(dataService.getLectures());
  };

  const handleSavePost = (post: Post) => {
    dataService.savePost(post);
    setEditingPost(null);
    refreshData();
  };

  const handleSaveCourse = (course: Course) => {
    dataService.saveCourse(course);
    setEditingCourse(null);
    refreshData();
  };

  const handleSaveLecture = (lecture: Lecture) => {
    dataService.saveLecture(lecture);
    setEditingLecture(null);
    refreshData();
  };

  const handleDeletePost = (slug: string) => {
    if (confirm(t("admin.deleteConfirm"))) {
      dataService.deletePost(slug);
      refreshData();
    }
  };

  return (
    <SiteLayout>
      <div className="container-prose py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <h1 className="font-display text-3xl sm:text-4xl text-gold">{t("admin.dashboard")}</h1>
          <Link to="/" className="text-sm text-gold hover:underline">
            {t("admin.backToSite")}
          </Link>
        </div>

        {editingPost && (
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-background/90 backdrop-blur-sm overflow-y-auto">
            <Card className="w-full max-w-2xl bg-card border-border my-4 sm:my-0">
              <CardHeader>
                <CardTitle>{t("admin.editPost")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("admin.titleEn")}
                    </label>
                    <Input
                      value={editingPost.title.en}
                      onChange={(e) =>
                        setEditingPost({
                          ...editingPost,
                          title: { ...editingPost.title, en: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("admin.categoryEn")}
                    </label>
                    <Input
                      value={editingPost.category.en}
                      onChange={(e) =>
                        setEditingPost({
                          ...editingPost,
                          category: { ...editingPost.category, en: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("admin.excerptEn")}
                  </label>
                  <Textarea
                    value={editingPost.excerpt.en}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        excerpt: { ...editingPost.excerpt, en: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="ghost" onClick={() => setEditingPost(null)}>
                    {t("common.cancel")}
                  </Button>
                  <Button
                    className="bg-gold text-primary-foreground"
                    onClick={() => handleSavePost(editingPost)}
                  >
                    {t("common.saveChanges")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Similar modals for Course and Lecture could be added here */}

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card border border-border h-auto p-1">
            <TabsTrigger value="posts" className="text-xs sm:text-sm py-2">{t("admin.posts")}</TabsTrigger>
            <TabsTrigger value="courses" className="text-xs sm:text-sm py-2">{t("admin.courses")}</TabsTrigger>
            <TabsTrigger value="lectures" className="text-xs sm:text-sm py-2">{t("admin.lectures")}</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle>{t("admin.blogPosts")}</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newPost: Post = {
                      slug: `new-post-${Date.now()}`,
                      title: {
                        en: "New Post",
                        am: "አዲስ ጽሑፍ",
                        ar: "مقال جديد",
                        om: "Barreeffama Haaraa",
                      },
                      excerpt: {
                        en: "Excerpt",
                        am: "ማጠቃለያ",
                        ar: "مقتطف",
                        om: "Cuunfaa",
                      },
                      category: {
                        en: "General",
                        am: "ጠቅላላ",
                        ar: "عام",
                        om: "Waliigalaa",
                      },
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                      readTime: {
                        en: "5 min read",
                        am: "5 ደቂቃ",
                        ar: "5 دقائق",
                        om: "daqiiqaa 5 dubbisuu",
                      },
                      body: [
                        {
                          en: "Post content...",
                          am: "የጽሑፍ ይዘት...",
                          ar: "محتوى المقال...",
                          om: "Qabiyyee barreeffamaa...",
                        },
                      ],
                    };
                    dataService.savePost(newPost);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> {t("admin.addPost")}
                </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="min-w-[140px]">{t("common.title")}</TableHead>
                      <TableHead>{t("admin.category")}</TableHead>
                      <TableHead>{t("common.date")}</TableHead>
                      <TableHead className="text-right">{t("common.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posts.map((post) => (
                      <TableRow key={post.slug} className="border-border">
                        <TableCell className="font-medium">
                          {getTextByLang(post.title, language)}
                        </TableCell>
                        <TableCell>{getTextByLang(post.category, language)}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setEditingPost(post)}
                              className="text-gold hover:bg-gold/10"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeletePost(post.slug)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle>{t("admin.courses")}</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newCourse: Course = {
                      id: `course-${Date.now()}`,
                      title: {
                        en: "New Course",
                        am: "አዲስ ኮርስ",
                        ar: "دورة جديدة",
                        om: "Koorsii Haaraa",
                      },
                      subtitle: {
                        en: "Subtitle",
                        am: "ንዑስ ርዕስ",
                        ar: "عنوان فرعي",
                        om: "Mata-duree gadi aanaa",
                      },
                      level: {
                        en: "Beginner",
                        am: "ጀማሪ",
                        ar: "مبتدئ",
                        om: "Jalqabaa",
                      },
                      duration: {
                        en: "4 weeks",
                        am: "4 ሳምንታት",
                        ar: "4 أسابيع",
                        om: "torbee 4",
                      },
                      lessons: 10,
                      description: {
                        en: "Description",
                        am: "መግለጫ",
                        ar: "وصف",
                        om: "Ibsa",
                      },
                      topics: [
                        {
                          en: "Topic 1",
                          am: "ርዕስ 1",
                          ar: "موضوع 1",
                          om: "Mata-duree 1",
                        },
                      ],
                    };
                    dataService.saveCourse(newCourse);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> {t("admin.addCourse")}
                </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="min-w-[140px]">{t("common.title")}</TableHead>
                      <TableHead>{t("admin.level")}</TableHead>
                      <TableHead>{t("admin.lessons")}</TableHead>
                      <TableHead className="text-right">{t("common.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id} className="border-border">
                        <TableCell className="font-medium">
                          {getTextByLang(course.title, language)}
                        </TableCell>
                        <TableCell>{getTextByLang(course.level, language)}</TableCell>
                        <TableCell>{course.lessons}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              dataService.deleteCourse(course.id);
                              refreshData();
                            }}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lectures" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle>{t("admin.lectures")}</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newLecture: Lecture = {
                      id: `lecture-${Date.now()}`,
                      title: {
                        en: "New Lecture",
                        am: "አዲስ ትምህርት",
                        ar: "محاضرة جديدة",
                        om: "Barnoota Haaraa",
                      },
                      topic: {
                        en: "Topic",
                        am: "ርዕስ",
                        ar: "موضوع",
                        om: "Mata-duree",
                      },
                      duration: {
                        en: "30 min",
                        am: "30 ደቂቃ",
                        ar: "30 دقيقة",
                        om: "daqiiqaa 30",
                      },
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                      platform: "YouTube",
                      description: {
                        en: "Description",
                        am: "መግለጫ",
                        ar: "وصف",
                        om: "Ibsa",
                      },
                    };
                    dataService.saveLecture(newLecture);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> {t("admin.addLecture")}
                </Button>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="min-w-[140px]">{t("common.title")}</TableHead>
                      <TableHead>{t("admin.platform")}</TableHead>
                      <TableHead>{t("common.date")}</TableHead>
                      <TableHead className="text-right">{t("common.actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lectures.map((lecture) => (
                      <TableRow key={lecture.id} className="border-border">
                        <TableCell className="font-medium">
                          {getTextByLang(lecture.title, language)}
                        </TableCell>
                        <TableCell>{lecture.platform}</TableCell>
                        <TableCell>{lecture.date}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              dataService.deleteLecture(lecture.id);
                              refreshData();
                            }}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SiteLayout>
  );
}

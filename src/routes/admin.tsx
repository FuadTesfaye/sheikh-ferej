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
  const { language } = useLanguage();
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
    if (confirm("Are you sure you want to delete this post?")) {
      dataService.deletePost(slug);
      refreshData();
    }
  };

  return (
    <SiteLayout>
      <div className="container-prose py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-4xl text-gold">Admin Dashboard (Mock)</h1>
          <Link to="/" className="text-sm text-gold hover:underline">
            Back to Site
          </Link>
        </div>

        {editingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm overflow-y-auto">
            <Card className="w-full max-w-2xl bg-card border-border">
              <CardHeader>
                <CardTitle>Edit Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      Title (EN)
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
                      Category (EN)
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
                    Excerpt (EN)
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
                    Cancel
                  </Button>
                  <Button
                    className="bg-gold text-primary-foreground"
                    onClick={() => handleSavePost(editingPost)}
                  >
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Similar modals for Course and Lecture could be added here */}

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="lectures">Lectures</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Blog Posts</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newPost: Post = {
                      slug: `new-post-${Date.now()}`,
                      title: { en: "New Post", am: "አዲስ ጽሑፍ", ar: "مقال جديد" },
                      excerpt: { en: "Excerpt", am: "ማጠቃለያ", ar: "مقتطف" },
                      category: { en: "General", am: "ጠቅላላ", ar: "عام" },
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                      readTime: { en: "5 min read", am: "5 ደቂቃ", ar: "5 دقائق" },
                      body: [{ en: "Post content...", am: "የጽሑፍ ይዘት...", ar: "محتوى المقال..." }],
                    };
                    dataService.savePost(newPost);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Post
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
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
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Courses</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newCourse: Course = {
                      id: `course-${Date.now()}`,
                      title: { en: "New Course", am: "አዲስ ኮርስ", ar: "دورة جديدة" },
                      subtitle: { en: "Subtitle", am: "ንዑስ ርዕስ", ar: "عنوان فرعي" },
                      level: { en: "Beginner", am: "ጀማሪ", ar: "مبتدئ" },
                      duration: { en: "4 weeks", am: "4 ሳምንታት", ar: "4 أسابيع" },
                      lessons: 10,
                      description: { en: "Description", am: "መግለጫ", ar: "وصف" },
                      topics: [{ en: "Topic 1", am: "ርዕስ 1", ar: "موضوع 1" }],
                    };
                    dataService.saveCourse(newCourse);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Course
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Title</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Lessons</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
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
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Lectures</CardTitle>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                  onClick={() => {
                    const newLecture: Lecture = {
                      id: `lecture-${Date.now()}`,
                      title: { en: "New Lecture", am: "አዲስ ትምህርት", ar: "محاضرة جديدة" },
                      topic: { en: "Topic", am: "ርዕስ", ar: "موضوع" },
                      duration: { en: "30 min", am: "30 ደቂቃ", ar: "30 دقيقة" },
                      date: new Date().toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }),
                      platform: "YouTube",
                      description: { en: "Description", am: "መግለጫ", ar: "وصف" },
                    };
                    dataService.saveLecture(newLecture);
                    refreshData();
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Lecture
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Title</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
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

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      toast.success(t.loginSuccess);
      navigate({ to: "/admin" });
    } else {
      toast.error(t.loginError);
    }
  };

  return (
    <SiteLayout>
      <div className="container-prose py-16 flex items-center justify-center">
        <Card className="w-full max-w-md bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display text-2xl text-gold text-center">
              {t.loginTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  {t.email}
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sheikh.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                  {t.password}
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin123"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gold text-primary-foreground hover:bg-gold/90">
                {t.loginButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}

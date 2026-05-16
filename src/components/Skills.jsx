import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiApachegroovy,
  SiDocker,
  SiElastic,
  SiGithubactions,
  SiGitlab,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import { GitBranch, ShieldCheck, Waypoints } from "lucide-react";

const iconMap = {
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  ArgoCD: GitBranch,
  Terraform: SiTerraform,
  "Microsoft Azure": FaMicrosoft,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Python: SiPython,
  Groovy: SiApachegroovy,
  TypeScript: SiTypescript,
  Go: SiGo,
  Java: FaJava,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  "ELK Stack": SiElastic,
  Helm: SiHelm,
  "GitHub Actions": SiGithubactions,
  "GitLab CI": SiGitlab,
  GitOps: GitBranch,
  DevSecOps: ShieldCheck,
  Kustomize: Waypoints,
  Bash: SiGnubash,
};

export default function Skills({ data }) {
  return (
    <section className="py-12 md:py-20" id="skills">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
          Capabilities
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl">
          {data.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {data.description}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.categories.map((category) => (
          <Card
            key={category.title}
            className="min-w-0 rounded-[1.75rem] border-border/70 bg-card/95 py-0 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.7)]"
          >
            <CardHeader className="px-5 pt-5">
              <CardTitle className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const IconComponent = iconMap[item.name];
                  return (
                    <span
                      key={item.name}
                      className="flex max-w-full items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-2 text-sm font-medium text-foreground/85"
                    >
                      {IconComponent ? <IconComponent className="size-4" /> : null}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

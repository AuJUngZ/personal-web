import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiArgo,
  SiTerraform,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPython,
  SiApachegroovy,
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiFlutter,
  SiNestjs,
  SiElixir,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiN8N,
  SiJira,
  SiConfluence,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaAws } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";

const iconMap = {
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Jenkins: SiJenkins,
  ArgoCD: SiArgo,
  Terraform: SiTerraform,
  Azure: FaMicrosoft,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Python: SiPython,
  Groovy: SiApachegroovy,
  TypeScript: SiTypescript,
  Golang: SiGo,
  Java: FaJava,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Flutter: SiFlutter,
  NestJS: SiNestjs,
  Elysia: SiElixir,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  N8n: SiN8N,
  Jira: SiJira,
  Confluence: SiConfluence,
  "Microsoft Teams": BsMicrosoftTeams,
};

export default function Skills({ data }) {
  return (
    <section className="py-10 md:py-20" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-[-0.015em]">
          {data.title}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
          {data.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data.categories.map((category) => (
          <Card
            key={category.title}
            className="bg-card border-border w-full md:w-[calc(33.333%-1.5rem)] md:max-w-[400px]"
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const IconComponent = iconMap[item.name];
                  return (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 rounded-md bg-border/50 py-1 px-3 text-sm font-medium text-muted-foreground"
                    >
                      {IconComponent ? (
                        <IconComponent className="size-4" />
                      ) : (
                        item.icon
                      )}
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

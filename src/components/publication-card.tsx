import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  description: string;
  link?: string;
}

export function PublicationCard({ title, description, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {title}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
          {link?(
            <CardDescription className="font-mono text-xs">
              DOI:
              <a
                href={`https://doi.org/${link}`}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline">
                 {link}
              </a>
            </CardDescription>
          ):(
            <></>
          )}
        </div>
      </CardHeader>
    </Card>
  );
}

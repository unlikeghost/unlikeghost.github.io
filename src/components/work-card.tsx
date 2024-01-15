import {
    Card,
    CardHeader,
    CardContent,
} from "./ui/card";

import { Badge } from "./ui/badge";

interface Props {
    company: string;
    link?: string;
    description: string;
    badges: readonly string[];
    start: string;
    end: string;
    title: string;
}

export function WorkCard({ company, link, description, badges, start, end, title }: Props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={link}>
                            {company}
                        </a>
                        <span className="inline-flex gap-x-1">
                            {badges.map((badge) => (
                                <Badge
                                    variant="secondary"
                                    className="align-middle text-xs"
                                    key={badge}
                                >
                                    {badge}
                                </Badge>
                            ))}
                        </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                        {start} - {end}
                    </div>
                </div>

                <h4 className="font-mono text-sm leading-none">
                    {title}
                </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
                {description}
            </CardContent>
        </Card>
    )
}
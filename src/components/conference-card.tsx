import {
    Card, CardHeader, CardContent
} from "./ui/card"

interface Props {
    name: string;
    place: string;
    date: string;
    description: string;
}

export function ConferenceCard({ name, place, date, description }: Props) {
    return (
        <Card className="flex flex-col overflow-hidden border border-muted p-3">
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        {name}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                        {date}
                    </div>
                </div>
                <h4 className="font-mono text-sm leading-none">
                    {place}
                </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
                {description}
            </CardContent>
        </Card>
    );
}
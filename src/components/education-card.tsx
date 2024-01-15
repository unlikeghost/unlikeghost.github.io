import {
    Card,
    CardHeader,
    CardContent,
} from "./ui/card";

interface Props {
    school: string;
    start: string;
    end: string;
    degree: string;
}

export function EducationCard({ school, start, end, degree }: Props) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                        {school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                        {start} - {end}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="mt-2">{degree}</CardContent>
        </Card>
    )
}
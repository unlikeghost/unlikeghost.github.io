import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { PublicationCard } from "@/components/publication-card";
import { ConferenceCard } from "@/components/conference-card";
import { WorkCard } from "@/components/work-card";
import { EducationCard } from "@/components/education-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div>
              {RESUME_DATA.contact.email ? (
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                  <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={`mailto:${RESUME_DATA.contact.email}`}
                  >
                    <MailIcon className="size-3" />
                    {RESUME_DATA.contact.email}
                  </a>
                </p>
              ) : null}

              {RESUME_DATA.contact.tel ? (
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                  <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={`tel:${RESUME_DATA.contact.tel.replace(/^\(\+(\d+)\)/, '+$1')}`}
                  >
                    <PhoneIcon className="size-3" />
                    {RESUME_DATA.contact.tel}
                  </a>
                </p>
              ) : null}
            </div>

            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                  >
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* About */}
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        {/* Education */}
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <EducationCard
                key={education.school}
                school={education.school}
                start={education.start}
                end={education.end}
                degree={education.degree}
              />
            );
          })}
        </Section>

        {/* Works */}
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <WorkCard
                key={work.company}
                company={work.company}
                link={work.link}
                description={work.description}
                badges={work.badges}
                start={work.start}
                end={work.end}
                title={work.title}
              />
            )
          })}
        </Section>

        {/* Publications */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Publications</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.publications.map((project) => {
              return (
                <PublicationCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        {/* Projects */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        {/* Conferences */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Conferences</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.conferences.map((conference) => {
              return (
                <ConferenceCard
                  key={conference.name}
                  name={conference.name}
                  place={conference.place}
                  date={conference.date}
                  description={conference.description}
                />
              )
            })}
          </div>
        </Section>

        {/* Skills */}
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

      {/* Laguajes */}
      <Section>
          <h2 className="text-xl font-bold">Laguajes</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.languajes.map((lang) => {
              return <Badge key={lang}>{lang}</Badge>;
            })}
          </div>
        </Section>

        {/* PersonalInterests */}
      <Section>
          <h2 className="text-xl font-bold">Personal Interests</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.personalinterests.map((perint) => {
              return <Badge key={perint}>{perint}</Badge>;
            })}
          </div>
        </Section>

      </section>
      
      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}

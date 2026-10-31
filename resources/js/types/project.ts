export type Project = {
    id: number;
    title: string;
    description: string;
    tech_stack: string;
    project_url: string | null;
    repo_url: string | null;
    image: string | null;
    image_url: string | null;
    date_completed: string; // "YYYY-MM-DD"
    display_order: number;
    client: string | null;
};

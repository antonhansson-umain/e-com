import Button from "../Button";

interface SelectedAlbumsIntroProps {
    sectionTitle: string;
    sectionDescription: string; 
    label: string
}

export default function SelectedAlbumsIntro({sectionTitle, sectionDescription, label}: SelectedAlbumsIntroProps) {
    return (
        <aside>
            <h2 className="font-sm-header">{sectionTitle}</h2>
            <p className="text-l">{sectionDescription}</p>
            <Button size="sm" variant="primary">{label}</Button>
        </aside>
    )
}

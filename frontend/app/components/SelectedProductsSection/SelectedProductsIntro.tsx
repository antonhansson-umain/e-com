import Button from "../Button";

interface SelectedProductsIntroProps {
    sectionTitle: string;
    sectionDescription: string; 
    label: string
}

export default function SelectedProductsIntro({sectionTitle, sectionDescription, label}: SelectedProductsIntroProps) {
    return (
        <aside>
            <h2>{sectionTitle}</h2>
            <p>{sectionDescription}</p>
            <Button size="sm" variant="primary">{label}</Button>
        </aside>
    )
}

import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {
    let image: [string, string, number?] = ["/images/undefined.svg", "undefined", 12];

    if (day == true) image = ["/images/true.svg", "true", 24]
    if (day == false) image = ["/images/false.svg", "true", 24]

    const [src, alt, size] = image
    return (
    <div className="flex items-center justify-center h-9">
        <Image 
        src={src}
        width={size}
        height={size}
        alt={alt}
        />
    </div> 
    );
}
export default DayState
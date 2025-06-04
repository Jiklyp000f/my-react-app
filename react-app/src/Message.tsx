export default function Message(props: { text: string }) {
    return <h1 className="text-3xl font-bold underline">{props.text}</h1>;
}
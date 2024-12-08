import { Button } from "./ui/Design-System/Button";
import { Typographie } from "./ui/Design-System/Typographie";

export default function Home() {
  return (
    <div>
      <fieldset className="border-black border-2 w-fit m-5 rounded">
        <legend className="ml-5">Buttons</legend>
        <div className="p-4 flex flex-wrap items-center gap-5">
          <Button size="large">Click Me</Button>
          <Button size="large" variant="outline">
            Click Me
          </Button>
          <Button size="large" variant="filled">
            Click Me
          </Button>
          <Button size="small" variant="delete">
            Click Me
          </Button>
          <Button size="small" variant="modify">
            Click Me
          </Button>
          <Button variant="noBorder">Click Me</Button>
        </div>
      </fieldset>
      <fieldset className="border-black border-2 w-fit m-5 rounded">
        <legend className="ml-5">Typographie</legend>
        <div className="space-y-5 p-4">
          <Typographie className="font-Cooper" theme="primary" variant="display">
            Display
          </Typographie>
          <Typographie className="font-Cooper" theme="secondary" variant="h1">
            Text H1
          </Typographie>
          <Typographie className="font-Cooper" theme="tercery" variant="h2">
            Text H2
          </Typographie>
          <Typographie className="font-Cooper" theme="error" variant="h3">
            Text H3
          </Typographie>
          <Typographie className="font-Cooper" theme="modify" variant="body-base">
            Text Body
          </Typographie>
          <Typographie className="font-Cooper" theme="dark" variant="body-bold">
            Text Bold
          </Typographie>
          <Typographie className="font-Cooper" theme="dark" variant="tag-title">
            Text Tag
          </Typographie>
          <Typographie className="font-Cooper" theme="dark" variant="link">
            Text Lien
          </Typographie>
          <Typographie className="font-Cooper" theme="dark" variant="body-sm">
            Text Small
          </Typographie>
        </div>
      </fieldset>
    </div>
  );
}

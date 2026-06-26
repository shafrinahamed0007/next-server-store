import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div>
      <h2>Hero Page</h2>
      <div className="flex gap-2 my-5">
        <Button>Hero Button</Button>
        <Button variant="secondary">Hero Button</Button>
        <Button variant="outline">Hero Button</Button>
      </div>
    </div>
  );
};

export default HeroPage;

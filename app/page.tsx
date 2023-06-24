
export default function Home() {

  const content = [];

  for (let i = 0; i < 200; i++) {
    content.push(
      <h1 key={i} className="text-3xl font-bold underline">
        Hello world!
      </h1>
    );
  }
  return (
    <>
      {content}

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

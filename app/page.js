import PopUps from "./(components)/PopUps";

export default function Home() {

  return (
    <main
      className={`
        w-dvw h-dvh 
        flex items-center justify-center
        bg-[url("./img/background.jpg")]
        bg-no-repeat bg-center bg-cover
      `}
    >
      <PopUps />
    </main>
  );
}

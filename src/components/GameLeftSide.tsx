import hand from '@assets/images/hand.png';
function GameLeftSide({
  isGameStarted,
  selectedWord,
  selectedLetter,
  lang,
  score,
  isMediaPipeModelLoading,
  levelWords
}: {
  isGameStarted: boolean;
  selectedWord: string;
  selectedLetter: string;
  isMediaPipeModelLoading: boolean;
  score: number;
  lang: string;
  levelWords: string[];
}) {
  if (isGameStarted) {
    return (
      <div className="border-2  relative w-full gap-8  flex flex-[1] flex-col self-center border-primary  items-center justify-center rounded-lg p-4">
        <p className="self-end top-2 absolute font-extrabold text-xl">
          {score}
          {'  '} ነጥብ
        </p>
        <div className="flex  gap-2 items-center text-white mx-5">
          <img
            className="w-9/12"
            src={`/images/${
              lang == 'am' ? 'amharic' : 'english'
            }/${selectedLetter?.toUpperCase()}.png`}
          />
          <h1 className="text-[120px] text-accent">{selectedLetter}</h1>
        </div>
        <div className="flex items-center justify-center px-16 py-2  bg-[#2E2E2E] rounded-lg">
          <p className="text-white">{selectedWord}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="border-2 flex flex-col self-center border-primary  items-center justify-center rounded-lg p-5">
      <img src={hand} className="object-contain w-72 aspect-square" />
    </div>
  );
}

export default GameLeftSide;

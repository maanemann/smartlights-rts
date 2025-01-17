
import ColorOption from "./ColorOption";

const Colors = ({ setFarve, handleRedColor, handleGreenColor, handleCyanColor, handleVioletColor, handleFuchsiaColor, handleOrangeColor }) => {

  return (
    <div className="
      flex
      gap-4
    ">
      <ColorOption
        onClick={() => {
          setFarve("bg-red-400");
          handleRedColor()
        }}
        className="bg-red-400 cursor-pointer"
      />
      <ColorOption
        onClick={() => {
          setFarve("bg-green-400");
          handleGreenColor()
        }}
        className="bg-green-400 cursor-pointer"
      />
      <ColorOption
        onClick={() => {
          setFarve("bg-cyan-500");
          handleCyanColor()
        }}
        className="bg-cyan-500 cursor-pointer"
      />
      <ColorOption
        onClick={() => {
          setFarve("bg-violet-500");
          handleVioletColor()
        }}
        className="bg-violet-500 cursor-pointer"
      />
      <ColorOption
        onClick={() => {
          setFarve("bg-fuchsia-400");
          handleFuchsiaColor()
        }}
        className="bg-fuchsia-400 cursor-pointer"
      />
      <ColorOption
        onClick={() => {
          setFarve("bg-orange-400");
          handleOrangeColor()
        }}
        className="bg-orange-400 cursor-pointer"
      />
      <div className="
        w-6
        aspect-square
        text-blue-950
        rounded-full
        bg-white
        text-center
        leading-snug
        cursor-not-allowed
      ">
        +
      </div>
    </div>
  );
}
 
export default Colors;

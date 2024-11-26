export default function AddPotForm({ onCloseModel }: any) {
  return (
    <form>
      <div>
        <h1>Add New Pot</h1>
        <p>
          Create a port to set savings targets. These can help keep you on track
          as you save from special purchases
        </p>
      </div>

      <div>
        <button onClick={onCloseModel}>close</button>
      </div>
    </form>
  );
}

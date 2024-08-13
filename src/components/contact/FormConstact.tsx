


export const FormContact = () => {
    return (
      <div
        className="text-white border border-white/15
      p-2 rounded-sm "
      >
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Name" className="myinput" />
          <input type="mail" placeholder="Email" className="myinput" />
          <textarea className="myinput" placeholder="Message"></textarea>
          <button
            className="border p-2 border-white/15 focus:border-white/80
           text-white hover:border-white/70 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    );
}
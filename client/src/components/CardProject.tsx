
function CardProject(){
    return(
        <div className="rounded flex justify-around bg-white">
            <div>
                <div>
                <h4 className="text-black">Valfenda</h4>
                <span className="text-black">something</span>
                </div>

                <div className="text-black">Uma aplicação de biblioteca pessoal, criada em react e golang.</div>
            </div>
            {/*Buttons */}
            <div>
                <button className="rounded-full w-10 h-10 border-1 border-b-black text-black">
                    9
                </button>
            </div>
        </div>
    )
}

export default CardProject
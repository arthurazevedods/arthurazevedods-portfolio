import CardProject from "./CardProject"

function RecentWorks(){
    return(
        <section>
            <h3 className="flex justify-center text-4xl bold pb-8 ">Trabalhos Recentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </div>

        </section>
        
    )
}

export default RecentWorks
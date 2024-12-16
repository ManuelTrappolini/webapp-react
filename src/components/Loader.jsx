import 'ldrs/zoomies'



export default function Loader() {
    return (
        <>
            <div className='loader'>

                <l-zoomies
                    size="80"
                    stroke="5"
                    bg-opacity="0.1"
                    speed="1.4"
                    color="black"
                ></l-zoomies>
            </div>
        </>
    )
}
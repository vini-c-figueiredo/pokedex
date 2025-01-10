import error from "../assets/error.jpg";

export function Error() {
    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
            <div className="w-full h-full flex justify-center items-center">
                <img
                    src={error}
                    alt="Erro 404"
                    className="object-contain w-full h-full"
                />
            </div>
        </div>
    );
}
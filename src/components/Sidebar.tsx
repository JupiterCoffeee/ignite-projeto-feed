import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return (
        <>
            <div className="bg-gray-600 h-[18.375rem] rounded-lg">
                <div className="flex flex-col gap-4">
                    <header className="flex flex-col gap-4">
                        <div>
                            <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=50&w=970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[4.5rem] object-cover"/>
                        </div>
                        <div className="flex justify-center -mt-10">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=50&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[3rem] h-[3rem] object-cover object-top rounded-lg border-3 border-gray-700 outline outline-3 outline-green-500 rounded-t-lg box-content"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-white text-center">Leslie Alexander</strong>
                            <span className="text-gray-300 text-sm text-center">Web Developer</span>
                        </div>    
                    </header>
                    <div className="flex justify-center items-center border-t-[1px] border-gray-500">
                        <a className="flex items-center mt-6 gap-3 border-2 border-green-500 rounded-lg py-[1rem] px-[1.5rem] hover:bg-green-500 group transition ease" href="#">
                            <PencilLine weight="bold" size={20} className="text-green-500 group-hover:text-white transition ease"/>
                            <p className="text-green-500 font-bold group-hover:text-white transition ease">Editar seu perfil</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
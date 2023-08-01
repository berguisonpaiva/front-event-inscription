

export function Card({ children }: { children: JSX.Element }) {
    return (
        <div className="fixed top-0 z-50 justify-center flex items-start h-screen p-4 overflow-hidden overflow-y-auto md:inset-0 max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">

                    {children}

                </div>
            </div>
        </div>
    );
}

import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserData } from "../interface/UserData";

import { Card } from "./Card";

interface ModalProps {
    closeModal(): void;

}

export function LoginRegister({ closeModal }: ModalProps) {
    const auth = useContext(AuthContext);
    const [isRegisterMode, setRegisterMode] = useState(false);


    const [userInput, setUserInput] = useState<UserData>({
        name: "",
        cpf: "",
        email: "",
        password: "",
    });
  

    const handleLogin = async () => {
        const { email, password } = userInput;
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                closeModal();
            } else {
                alert("Não deu certo.");
            }
        }
    };

    const handleRegister = async () => {
        const { name, cpf, email, password } = userInput;
        if (email && password) {
            const user: UserData = { name, cpf, email, password };
            const isLogged = await auth.register(user);

            if (isLogged) {
                closeModal();
            } else {
                alert("Não deu certo.");
            }
        }
    };

    return (
        <Card>
            <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex items-start justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                        {isRegisterMode ? "Criar uma conta" : "Faça login em sua conta"}
                    </h1>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                        data-modal-hide="defaultModal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                stroke="currentColor"
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="space-y-4 md:space-y-6" action="#">
                {isRegisterMode && (
                  <>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                      <input
                        type="text"
                        value={userInput.name}
                        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cpf</label>
                      <input
                        type="text"
                        value={userInput.cpf}
                        onChange={(e) => setUserInput({ ...userInput, cpf: e.target.value })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userInput.email}
                    onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    value={userInput.password}
                    onChange={(e) => setUserInput({ ...userInput, password: e.target.value })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {isRegisterMode ? (
                  <button
                    onClick={handleRegister}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Registrar
                  </button>
                ) : (
                  <button
                  type="button" 
                    onClick={handleLogin}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Entrar
                  </button>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {isRegisterMode
                    ? "Já tem uma conta?"
                    : "Não tem uma conta ainda?"}{" "}
                  <button
                  type="button" 
                    onClick={() => setRegisterMode(!isRegisterMode)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {isRegisterMode ? "Fazer login" : "Inscrever-se"}
                  </button>
                </p>
                </form>
            </div>

        </Card>
    );
                        }
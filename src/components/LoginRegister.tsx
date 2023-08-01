import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserData } from "../interface/UserData";
import { InputForm } from "./InputForm";
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
            <div>
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
                            <InputForm
                                name="Nome"
                                type="text"
                                value={userInput.name}
                                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                            />
                            <InputForm
                                name="CPF"
                                type="text"
                                value={userInput.cpf}
                                onChange={(e) => setUserInput({ ...userInput, cpf: e.target.value })}
                            />


                        </>
                    )}

                    <InputForm
                        name="Email"
                        type="email"
                        value={userInput.email}
                        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                    />
                    <InputForm
                        name="Password"
                        type="password"
                        value={userInput.password!}
                        onChange={(e) => setUserInput({ ...userInput, password: e.target.value })}
                        placeholder="••••••••"
                    />

                    {isRegisterMode ? (
                        <button
                            onClick={handleRegister}
                            className="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            Registrar
                        </button>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                        >
                            Entrar
                        </button>
                    )}

                    <p className="text-sm font-light text-gray-400">
                        {isRegisterMode
                            ? "Já tem uma conta?"
                            : "Não tem uma conta ainda?"}{" "}
                        <button
                            onClick={() => setRegisterMode(!isRegisterMode)}
                            className="font-medium text-primary-600 hover:underline text-primary-500"
                        >
                            {isRegisterMode ? "Fazer login" : "Inscrever-se"}
                        </button>
                    </p>
                </form>
            </div>

        </Card>
    );
}
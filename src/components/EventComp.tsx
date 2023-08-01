import { useContext, useState } from "react";
import { EventData } from "../interface/EventData";
import { format } from "date-fns";
import { AuthContext } from "../contexts/AuthContext";
import { InscriptionInputData } from "../interface/InscriptionInputData";
import { Link } from "react-router-dom";
import { LoginRegister } from "./LoginRegister";
import { ToastContainer } from "react-toastify";
import { useInscriptionDataMutate } from "../hooks/useInscriptionDataMutate";
import 'react-toastify/dist/ReactToastify.css';
interface EventProps {
    eventData: EventData;
}

export function EventComp({eventData}: EventProps) {
    const { mutate: mutateInscription, isLoading } = useInscriptionDataMutate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const auth = useContext(AuthContext);
  
    const formattedStartTime = format(
      new Date(eventData.start_date),
      "dd/MM/yyyy hh:mm"
    );
    const formattedEndTime = format(
      new Date(eventData.end_date),
      "dd/MM/yyyy hh:mm"
    );
  
  
  
    const handleOpenModal = () => {
      if (auth.user?.id) {
        handleInscriptionButtonClick(eventData.id!);
      } else {
        setIsModalOpen(true);
      }
    };
    const isUserInscribed = () => {
      if (!auth.user || !auth.user.id) {
        return false;
      }
      return eventData.inscriptions?.some(
        (inscription) => inscription.user_id === auth.user?.id
      );
    };
  
    const handleInscriptionButtonClick = async (eventId: number) => {
      const inscriptionData: InscriptionInputData = {
        user_id: auth.user!.id!,
        event_id: eventId,
      };
  
  
      await mutateInscription(inscriptionData);
  
  
    };
    return (
        <div className="relative items-center border block w-96 p-6 rounded-lg shadow-lg bg-gray-800 border-gray-800 ">
        <h5 className={`mb-2 text-2xl font-bold tracking-tight ${isLoading ? 'opacity-20' : ''} text-white`}> {eventData.name}</h5>
        <p className={`font-normal  text-gray-400 ${isLoading ? 'opacity-20' : ''}`}> Inicio: {formattedStartTime}</p>
        <p className={`font-normal  text-gray-400 ${isLoading ? 'opacity-20' : ''}`}> Fim: {formattedEndTime}</p>
        {isLoading ? <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
          <svg aria-hidden="true" className="w-10 h- mr-2  animate-spin text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
  
        </div> : null}
        <div className="flex mt-10 flex-row gap-2">
          <button
            onClick={handleOpenModal}
            disabled={isLoading}
            className={`inline-flex w-full justify-center items-center px-3 py-2 text-sm  text-center text-white font-bold rounded-lg  focus:ring-4 focus:outline-none 
            ${!isUserInscribed() ?" bg-blue-700 hover:bg-blue-700 focus:ring-blue-800":"bg-blue-900 hover:bg-blue-900 focus:ring-blue-900"}`}
          >
            {!isUserInscribed() ? <div className="flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path fill="currentColor"  d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg> Inscrever
            </div> : <div className="flex justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path fill="currentColor"  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
              </svg> Inscrito
              </div>}
          </button>
          <Link
          to={`/inscription/${eventData.id}`}
          className="inline-flex gap-2 w-full justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-green rounded-lg focus:ring-4 focus:outline-none  bg-slate-600 hover:bg-slate-700 focus:ring-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path fill="currentColor"  d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/>
            </svg>
          Inscrições
        </Link>
        </div>
       
        {isModalOpen && (
          <LoginRegister closeModal={() => setIsModalOpen(false)} />
        )}
  
        <ToastContainer />
  
      </div>
    )
}


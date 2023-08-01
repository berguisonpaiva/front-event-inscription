
import { EventComp } from "../components/EventComp";
import { useEventData } from "../hooks/userEventData";


export function Home() {
    const { data} = useEventData();
    return (
        <div className=" rounded-lg w-full  justify-center">
            
              <div className="p-6 flex flex-wrap gap-3">
                {data?.map(eventData =>
                    <EventComp
                        key={eventData.id} 
                       eventData={eventData}
                    />
                )}
            </div>
        </div>
    )
}
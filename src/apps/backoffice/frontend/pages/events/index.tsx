import { BackofficeEventViewModel } from "@contexts/Backoffice/Events/infrastructure/IBackofficeEventView";
import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {}

const fetcher = (endpoint: string) =>
  window.fetch(endpoint).then((r) => r.json());

type Input = {
  name: string;
  duration: string;
};
const Events: React.FC<Props> = () => {
  const { data, error, mutate } = useSWR<BackofficeEventViewModel[]>(
    "/api/events",
    fetcher
  );
  const { register, handleSubmit,  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async (formData) => {
    try {
      await window.fetch("/api/events", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      mutate();
    } catch (err) {
      console.error(err);
    }
  };
  if (error) return <div>Failed to load all events</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex-row w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Create an Event</h4>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" {...register("name", { required: true })} />
        <label htmlFor="duration-input">Duration</label>
        <input
          id="duration-input"
          {...register("duration", { required: true })}
      />     
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((event, i) => (
            <tr key={i}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;

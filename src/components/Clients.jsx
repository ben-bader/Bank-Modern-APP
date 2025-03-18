import { clients } from "."


const Clients = () => {
  const ClientImg = ({logo,id}) => (
    <div key={id} className="w-40 flex items-center justify-center ">
      <img src={logo} alt={id} className="object-contain" />
    </div>
  )
  return (
    <section id="clients" className="flex flex-wrap  items-center justify-center py-24 gap-10 w-full h-fit px-10">
      {clients.map((client)=>(
          <ClientImg logo={client.logo} id={client.id} key={client.id}/>
        ))}
    </section>
  )
}

export default Clients

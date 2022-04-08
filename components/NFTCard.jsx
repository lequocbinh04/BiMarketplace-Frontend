export default function ({ id, name, price, image }) {
    return (
        <a
            className="bg-dark-secondary rounded-2xl px-3 py-2 hover:bg-[#0F1C40] transition-all duration-300 hover:-translate-y-2"
            href="#"
        >
            <img alt="" src={image} />
            <div className="px-2 flex justify-between items-center mt-2">
                <span className="text-blue-primary text-xs">{id}</span>
                <span className="text-xs text-gray-400">Price</span>
            </div>
            <div className="px-2 flex justify-between items-center mt-1">
                <span className=" text-xs">{name}</span>
                <span className="text-xs">{price}</span>
            </div>
        </a>
    );
}

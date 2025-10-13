export default function Card({children,className,...props}) {
  return (
    <div className={`w-[70%]  max-w-3xl bg-white p-4 rounded-xl shadow-xl flex flex-col ${className}` } {...props}>
      {children}
    </div>
  );
}

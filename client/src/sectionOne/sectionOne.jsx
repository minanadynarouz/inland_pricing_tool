export default function SectionOne({ text, className = "" }) {
  return (
    <div className={`ml:1 font-roboto text-blue-900 sm:ml-2 sm:mt-2 md:mt-0 ${className}`}>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
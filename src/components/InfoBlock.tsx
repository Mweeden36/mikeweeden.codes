import { Briefcase, MapPin } from "react-feather";

export default function InfoBlock() {
  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="text-3xl font-semibold flex items-center">Mike Weeden</h1>
      <p className="text-silver pb-2">he/him</p>
      <h2 className="flex items-center">
        <Briefcase className="inline pr-2" />
        <span className="leading-8">Software Engineer</span>
      </h2>
      <h2 className="flex items-center">
        <MapPin className="inline pr-2" />
        <span className="leading-8">New York, USA</span>
      </h2>
    </div>
  );
}

export function ProviderDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-[#1B4332] mb-8">Provider Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Active Projects", value: "12" },
          { label: "Total Earnings", value: "$4,250" },
          { label: "Client Rating", value: "4.9/5" },
          { label: "Pending Requests", value: "3" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-[#1B4332]/10 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-[#1B4332]">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-[#1B4332]/10 shadow-sm p-8 h-64 flex items-center justify-center text-gray-400">
        Project activity chart will appear here
      </div>
    </div>
  );
}

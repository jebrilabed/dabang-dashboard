import React from 'react'

// Country dots on a simplified world map SVG
const countries = [
  { name: 'USA', cx: '22%', cy: '40%', color: '#FDCB6E' },
  { name: 'Brazil', cx: '30%', cy: '65%', color: '#FD79A8' },
  { name: 'UK', cx: '46%', cy: '28%', color: '#74B9FF' },
  { name: 'Russia/China', cx: '65%', cy: '30%', color: '#A29BFE' },
  { name: 'India', cx: '65%', cy: '48%', color: '#00B894' },
  { name: 'Indonesia', cx: '76%', cy: '60%', color: '#00CEC9' },
  { name: 'Australia', cx: '80%', cy: '72%', color: '#0984E3' },
]

const SalesByCountry = () => {
  return (
    <div className="card animate-fade-in-up stagger-7">
      <h2 className="section-title mb-4">Sales Mapping by Country</h2>

      <div className="relative w-full rounded-xl overflow-hidden bg-gray-50" style={{ paddingBottom: '52%' }}>
        {/* World map SVG background */}
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified continent shapes */}
          {/* North America */}
          <path d="M60,80 Q100,60 160,80 L180,130 Q170,180 140,200 L100,220 Q70,200 60,160 Z" fill="#E5E7EB" />
          {/* South America */}
          <path d="M160,220 Q200,210 220,240 L230,310 Q220,360 190,370 L160,350 Q140,310 150,270 Z" fill="#E5E7EB" />
          {/* Europe */}
          <path d="M340,60 Q390,50 420,70 L430,110 Q420,140 390,150 L350,140 Q330,120 340,90 Z" fill="#E5E7EB" />
          {/* Africa */}
          <path d="M350,150 Q400,140 430,160 L440,250 Q430,320 400,340 L360,330 Q330,290 330,230 Q335,180 350,150 Z" fill="#E5E7EB" />
          {/* Asia */}
          <path d="M420,60 Q520,40 640,60 L680,120 Q700,180 680,220 L620,240 Q540,230 480,210 L430,180 Q415,140 420,100 Z" fill="#E5E7EB" />
          {/* Australia */}
          <path d="M600,270 Q650,255 690,270 L710,310 Q700,350 670,360 L630,350 Q600,330 595,300 Z" fill="#E5E7EB" />
          {/* Southeast Asia islands */}
          <ellipse cx="620" cy="258" rx="20" ry="10" fill="#E5E7EB" />
          <ellipse cx="650" cy="265" rx="15" ry="8" fill="#E5E7EB" />

          {/* Country highlights & dots */}
          {countries.map((c) => (
            <g key={c.name}>
              <circle
                cx={c.cx}
                cy={c.cy}
                r="14"
                fill={c.color}
                fillOpacity="0.2"
              />
              <circle
                cx={c.cx}
                cy={c.cy}
                r="6"
                fill={c.color}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
        {countries.map((c) => (
          <div key={c.name} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
            <span className="text-xs text-gray-500">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalesByCountry

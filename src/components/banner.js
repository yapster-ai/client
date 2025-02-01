import React, { useMemo, useRef, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import {
  Wallet,
  Download,
  ExternalLink,
} from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const SocialProfile = () => {
  const { logout, user } = usePrivy();
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = useRef(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const chartData = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const x = i / 8;
      return {
        name: i,
        value: 30 + Math.sin(x) * 20 + Math.sin(x * 2) * 10 + Math.random() * 5,
      };
    });
  }, []);

  const stats = [
    { label: "Smart Followers", value: "2.1k" },
    { label: "Followers", value: "8.4k" },
    { label: "Yaps", value: "42" },
  ];

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleDownload = useCallback(async () => {
    if (!contentRef.current) return;
    
    try {
      setIsDownloading(true);

      // Wait for a brief moment to ensure all content is rendered
      await new Promise(resolve => setTimeout(resolve, 500));

      const html2canvas = (await import('html2canvas')).default;
      
      // Convert SVG to canvas first
      const svgElement = contentRef.current.querySelector('svg');
      if (svgElement) {
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);
        
        // Create temporary img from SVG
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = svgUrl;
        });
      }

      // Capture the content
      const canvas = await html2canvas(contentRef.current, {
        backgroundColor: getComputedStyle(document.body).backgroundColor,
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        onclone: (clonedDoc) => {
          const clonedContent = clonedDoc.querySelector('[data-capture="true"]');
          if (clonedContent) {
            clonedContent.style.transform = 'none';
            clonedContent.style.width = '460px';
            clonedContent.style.height = 'auto';
          }
        }
      });

      // Convert to file and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${user?.twitter?.username || 'profile'}-yapster.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 'image/png', 1.0);

    } catch (error) {
      console.error('Error generating image:', error);
      setIsDownloading(false);
    }
  }, [user?.twitter?.username]);

  return (
    <div className="w-full p-4 bg-background">
      <div className="flex items-center justify-between mx-auto">
        <p className="text-xl font-semibold">
          Yapster<span className="text-primary">.ai</span>
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src={user?.twitter?.profilePictureUrl}
            alt={user?.twitter?.name}
            className="w-8 h-8 rounded-full"
            crossOrigin="anonymous"
          />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[460px] p-0 overflow-hidden bg-gradient-to-b from-background to-muted/30">
          <div ref={contentRef} data-capture="true" className="bg-background">
            {/* Header */}
            <div className="relative h-40 overflow-hidden bg-primary/5">
              <div className="absolute inset-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="100%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="url(#colorValue)"
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Profile Section */}
            <div className="px-6 -mt-10 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <img
                  src={user?.twitter?.profilePictureUrl}
                  alt={user?.twitter?.name}
                  className="w-20 h-20 rounded-full border-4 border-background shadow-xl"
                  crossOrigin="anonymous"
                />
                <Button 
                  variant="outline" 
                  className="gap-2" 
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  <Download className="w-4 h-4" />
                  {isDownloading ? 'Processing...' : 'Download'}
                </Button>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">{user?.twitter?.name}</h2>
                  <div className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                    Pro
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  @{user?.twitter?.username}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-lg bg-muted/50"
                  >
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Wallet Section */}
              <div className="mt-4 flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Wallet className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Connected Wallet</div>
                    <div className="text-xs text-muted-foreground">
                      {formatAddress(user?.wallet?.address)}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Logout Button */}
              <div className="mt-6 mb-6">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SocialProfile;
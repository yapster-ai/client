import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

const ProtocolDemoVideo = ({ isOpen, setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="">
      {/* Video Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-card">
          {/* YouTube Video Container */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/-1GB6m39-rM?si=8crtt2Ug1FrHGg8q"
              title="Protocol Demo Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="p-4">
            <DialogHeader>
              <DialogTitle className="text-lg text-foreground">
                Protocol Implementation Demo
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                A comprehensive walkthrough of the protocol setup and execution
                process.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Footer */}
          <DialogFooter className="px-4 py-3 border-t">
            {/* <Button
              variant="secondary"
              onClick={() => setIsOpen(false)}
              size="sm"
            >
              Close
            </Button> */}
            <Button onClick={() => router.push("/app")} size="sm">
              Open App
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProtocolDemoVideo;

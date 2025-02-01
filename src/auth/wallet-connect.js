import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Wallet } from "lucide-react";

const WalletConnect = ({ login }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Wallet className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-center">Welcome</h2>
          <p className="text-center text-muted-foreground">
            Connect your wallet to continue
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={login} className="w-full" size="lg">
            Connect Wallet
          </Button>
        </CardContent>
        <CardFooter className="justify-center text-sm text-muted-foreground">
          By connecting, you agree to our Terms of Service
        </CardFooter>
      </Card>
    </div>
  );
};

export default WalletConnect;

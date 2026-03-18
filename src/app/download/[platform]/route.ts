import { redirect } from "next/navigation";

const SUPABASE_URL = "https://luqkupfumazhmpmyibrt.supabase.co/storage/v1/object/public/releases";
const VERSION = "0.1.5";

const downloads: Record<string, string> = {
  macos: `${SUPABASE_URL}/v${VERSION}/Neura.X_${VERSION}_aarch64.dmg`,
  "macos-intel": `${SUPABASE_URL}/v${VERSION}/Neura.X_${VERSION}_x64.dmg`,
  windows: `${SUPABASE_URL}/v${VERSION}/Neura.X_${VERSION}_x64-setup.exe`,
  linux: `${SUPABASE_URL}/v${VERSION}/Neura.X_${VERSION}_amd64.deb`,
  "linux-appimage": `${SUPABASE_URL}/v${VERSION}/Neura.X_${VERSION}_amd64.AppImage`,
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ platform: string }> }
) {
  const { platform } = await params;
  const url = downloads[platform];

  if (!url) {
    redirect("/");
  }

  redirect(url);
}

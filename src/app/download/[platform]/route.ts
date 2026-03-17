import { redirect } from "next/navigation";

const GITHUB_REPO = "KushagraSikka/neurax-frontend";
const VERSION = "0.1.5";

const downloads: Record<string, string> = {
  macos: `https://github.com/${GITHUB_REPO}/releases/latest/download/Neura.X_${VERSION}_aarch64.dmg`,
  "macos-intel": `https://github.com/${GITHUB_REPO}/releases/latest/download/Neura.X_${VERSION}_x64.dmg`,
  windows: `https://github.com/${GITHUB_REPO}/releases/latest/download/Neura.X_${VERSION}_x64-setup.exe`,
  linux: `https://github.com/${GITHUB_REPO}/releases/latest/download/Neura.X_${VERSION}_amd64.deb`,
  "linux-appimage": `https://github.com/${GITHUB_REPO}/releases/latest/download/Neura.X_${VERSION}_amd64.AppImage`,
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

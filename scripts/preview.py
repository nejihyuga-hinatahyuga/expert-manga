"""Quiet, local-only preview. Serve site files, not repository/private files."""
import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
PUBLIC_FILES = {
    'index.html', 'styles.css', 'script.js', 'manga-roster.js',
    'manga-images.js', 'manga-data.js', 'manga-expansion.js', 'youtube-status.js',
}


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = unquote(urlsplit(self.path).path).lstrip('/') or 'index.html'
        candidate = (ROOT / path).resolve()
        try:
            relative = candidate.relative_to(ROOT)
        except ValueError:
            self.send_error(403)
            return
        if not (str(relative) in PUBLIC_FILES or (relative.parts and relative.parts[0] == 'assets' and candidate.is_file())):
            self.send_error(403)
            return
        super().do_GET()

    def do_HEAD(self):
        self.send_error(405)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def log_message(self, *args):
        # Hundreds of image requests must not fill the preview output pipe.
        pass


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=4175)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), PreviewHandler)
    print(f'Local preview: http://127.0.0.1:{args.port}/', flush=True)
    server.serve_forever()

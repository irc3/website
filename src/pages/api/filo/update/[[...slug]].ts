import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    url: 'https://github.com/irc3/filo/releases/download/v0.1.1/filo.app.tar.gz',
    version: 'v0.1.1',
    notes: 'Theses are some release notes',
    pub_date: '2022-05-25T12:29:53+01:00',
    signature:
      'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSSlRLYUdRNSs4dk9ISWZ6aUJwSGY5V054c29LOUp0T3FNSUhCUHhIVXNUWjBPZCtPcjZ5Mk9ISHRRZWJZSXRPZUhiTEtOTThCRHBSS1hsSHZMc21BVjNoZUFBaUJkQWc0PQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNjUzNDYzNzU2CWZpbGU6L1VzZXJzL3J1bm5lci93b3JrL2ZpbG8vZmlsby9wYWNrYWdlcy9maWxvL3NyYy10YXVyaS90YXJnZXQvcmVsZWFzZS9idW5kbGUvbWFjb3MvZmlsby5hcHAudGFyLmd6ClVBbnpsMHVCMVdxb0RLRm5NSk1iK3EzNCs1ZzZ3Z0JtcmlyZE13RzBHOGU1T2UzYTFWbzMxU0dXYXo0UkRqM0Y5NGJyMjQ1QzkrSEVyc0JPRExuNkN3PT0K',
  });
}

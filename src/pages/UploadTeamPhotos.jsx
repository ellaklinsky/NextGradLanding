import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Upload, CheckCircle, Loader2 } from 'lucide-react';

export default function UploadTeamPhotos() {
  const [harshFile, setHarshFile] = useState(null);
  const [ellaFile, setEllaFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setSuccess(false);

    try {
      // Upload Harsh's photo
      if (harshFile) {
        const harshResult = await base44.integrations.Core.UploadFile({ file: harshFile });
        
        // Check if record exists and update or create
        const existing = await base44.entities.TeamPhoto.filter({ member_name: 'Harsh Yallmpalli' });
        if (existing.length > 0) {
          await base44.entities.TeamPhoto.update(existing[0].id, { photo_url: harshResult.file_url });
        } else {
          await base44.entities.TeamPhoto.create({
            member_name: 'Harsh Yallmpalli',
            photo_url: harshResult.file_url
          });
        }
      }

      // Upload Ella's photo
      if (ellaFile) {
        const ellaResult = await base44.integrations.Core.UploadFile({ file: ellaFile });
        
        const existing = await base44.entities.TeamPhoto.filter({ member_name: 'Ella Klinsky' });
        if (existing.length > 0) {
          await base44.entities.TeamPhoto.update(existing[0].id, { photo_url: ellaResult.file_url });
        } else {
          await base44.entities.TeamPhoto.create({
            member_name: 'Ella Klinsky',
            photo_url: ellaResult.file_url
          });
        }
      }

      setSuccess(true);
      setHarshFile(null);
      setEllaFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Team Photos</h1>
          <p className="text-slate-600 mb-8">Upload photos for the About page team section</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="harsh-photo">Harsh Yallmpalli's Photo</Label>
              <Input
                id="harsh-photo"
                type="file"
                accept="image/*"
                onChange={(e) => setHarshFile(e.target.files[0])}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="ella-photo">Ella Klinsky's Photo</Label>
              <Input
                id="ella-photo"
                type="file"
                accept="image/*"
                onChange={(e) => setEllaFile(e.target.files[0])}
                className="mt-2"
              />
            </div>

            {success && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <span>Photos uploaded successfully!</span>
              </div>
            )}

            <Button 
              type="submit" 
              disabled={uploading || (!harshFile && !ellaFile)}
              className="w-full"
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photos
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
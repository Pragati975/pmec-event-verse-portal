
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ClubDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  club: {
    name: string;
    description: string;
    fullDescription: string;
    icon: any;
    color: string;
  } | null;
}

export const ClubDetailsModal = ({ isOpen, onClose, club }: ClubDetailsModalProps) => {
  if (!club) return null;

  const IconComponent = club.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${club.color} flex items-center justify-center`}>
              <IconComponent size={28} className="text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {club.name}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {club.fullDescription}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

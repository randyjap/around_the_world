class RoomMembership < ApplicationRecord
  validates :room, :guest, presence: true
  validates :room, uniqueness: { scope: :guest }

  belongs_to :room
  belongs_to :guest, class_name: "User"
end

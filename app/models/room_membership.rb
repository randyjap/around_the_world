class RoomMembership < ApplicationRecord
  validates :room, :guest, presence: true
end

class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "AllRooms"
  end
end

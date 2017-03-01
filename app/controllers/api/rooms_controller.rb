class Api::RoomsController < ApplicationController
  def index
    # if current_user
    if user = User.first
      @rooms = user.rooms.includes(:moderator)
    else
      render json: ["you are not logged in"], status: 401
    end
  end

  def create
    user = User.first
    name = params[:name]
    @room = Room.new(moderator: user, name: name)
    if @room.save
      RoomMembership.create(guest: user, room: @room)
      render json: @room, status: 200
    else
      render json: ["not saved"], status: 401
    end
  end
end

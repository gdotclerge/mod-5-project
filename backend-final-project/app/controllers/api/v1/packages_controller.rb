class Api::V1::PackagesController < ApplicationController
  skip_before_action :authorized, only: [:index, :photographer_packages]


  def index
    @packages = Package.all
    render json: @packages
  end


  def show
    @package = Package.find(params[:id])
    render json: @package
  end


  def photographer_packages
    @packages = Package.all.select{ |p| p.photographer_id === package_params[:photographer_id] }
    render json: @packages
  end

  private

  def package_params
    params.require(:packages).permit(:photographer_id)
  end

end
